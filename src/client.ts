import { $Fetch, ofetch } from "ofetch";
import {
  Article,
  CreateTaskPayload,
  CreateTaskResponse,
  CreateTimeRecordPayload,
  CreateTimeRecordResponse,
  FindArticlesQuery,
  FindPartiesQuery,
  FindUsersQuery,
  Party,
  User,
} from "./types";

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

  async findParties(findPartiesQuery?: FindPartiesQuery) {
    const { result } = await this.fetch<{ result: Party[] }>("party", {
      query: findPartiesQuery,
    });

    return { result };
  }

  async findUsers(findUsersQuery?: FindUsersQuery) {
    const { result } = await this.fetch<{ result: User[] }>("user", {
      query: findUsersQuery,
    });

    return { result };
  }

  async findArticles(findArticlesQuery?: FindArticlesQuery) {
    const { result } = await this.fetch<{ result: Article[] }>("article", {
      query: findArticlesQuery,
    });

    return { result };
  }

  async createTask(createTaskPayload: CreateTaskPayload) {
    const task = await this.fetch<CreateTaskResponse>("task", {
      method: "POST",
      body: createTaskPayload,
    });

    return task;
  }

  async createTimeRecord(createTimeRecordPayload: CreateTimeRecordPayload) {
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
