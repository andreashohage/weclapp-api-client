import { type $Fetch, ofetch } from "ofetch";
import type {
  Article,
  CreateTaskPayload,
  CreateTaskResponse,
  CreateTimeRecordPayload,
  CreateTimeRecordResponse,
  FindArticlesQuery,
  FindArticlesResponse,
  FindPartiesQuery,
  FindPartiesResponse,
  FindUsersQuery,
  FindUsersResponse,
  Task,
  TimeRecord,
  User,
} from "./types.ts";

export class WeclappApiClient {
  private fetch: $Fetch;

  constructor(baseURL: string, authenticationToken: string) {
    this.fetch = ofetch.create({
      baseURL: `${baseURL}/webapp/api/v1`,
      headers: {
        AuthenticationToken: authenticationToken,
      },
    });
  }

  async findParties(
    findPartiesQuery?: FindPartiesQuery
  ): Promise<FindPartiesResponse> {
    const { result } = await this.fetch<FindPartiesResponse>("party", {
      query: findPartiesQuery,
    });

    return { result };
  }

  async findUsers(findUsersQuery?: FindUsersQuery): Promise<FindUsersResponse> {
    const { result } = await this.fetch<{ result: User[] }>("user", {
      query: findUsersQuery,
    });

    return { result };
  }

  async findArticles(
    findArticlesQuery?: FindArticlesQuery
  ): Promise<FindArticlesResponse> {
    const { result } = await this.fetch<{ result: Article[] }>("article", {
      query: findArticlesQuery,
    });

    return { result };
  }

  async createTask(createTaskPayload: CreateTaskPayload): Promise<Task> {
    const task = await this.fetch<CreateTaskResponse>("task", {
      method: "POST",
      body: createTaskPayload,
    });

    return task;
  }

  async createTimeRecord(
    createTimeRecordPayload: CreateTimeRecordPayload
  ): Promise<TimeRecord> {
    const timeRecord = await this.fetch<CreateTimeRecordResponse>(
      "timeRecord",
      {
        method: "POST",
        body: createTimeRecordPayload,
      }
    );

    return timeRecord;
  }
}
