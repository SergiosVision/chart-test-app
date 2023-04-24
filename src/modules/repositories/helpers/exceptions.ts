import { ApplicationException } from '@utils/exception';

export class GetRepositoriesListBaseError extends ApplicationException {}
export class GetRepositoryDetailsBaseError extends ApplicationException {}

export class GetWeeklyCommitCountBaseError extends ApplicationException {}
