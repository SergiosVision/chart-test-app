FROM node:14-alpine AS builder
ENV NODE_ENV production

#FROM base AS deps
#RUN apk add --no-cache libc6-compat
#WORKDIR /app
#COPY package.json yarn.lock ./
#RUN yarn install --production --frozen-lockfile
#
#FROM base AS builder
#WORKDIR /app
#COPY . .
#COPY --from=deps /app/node_modules ./node_modules
#RUN yarn build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY . .
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
