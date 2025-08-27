import { type $Fetch, ofetch } from "ofetch";
import type {
  Article,
  Contact,
  CreateTaskPayload,
  CreateTaskResponse,
  CreateTimeRecordPayload,
  CreateTimeRecordResponse,
  Customer,
  FindArticlesQuery,
  FindArticlesResponse,
  FindContactsQuery,
  FindContactsResponse,
  FindCustomersQuery,
  FindCustomersResponse,
  FindPartiesQuery,
  FindPartiesResponse,
  FindTicketsQuery,
  FindTicketsResponse,
  FindUsersQuery,
  FindUsersResponse,
  Party,
  Task,
  Ticket,
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

  raw<T = any>(
    endpoint: string,
    method: string = "GET",
    body?: any,
    query?: any
  ): Promise<T> {
    return this.fetch(endpoint, {
      method,
      body,
      query,
    });
  }

  async findParties(
    findPartiesQuery?: FindPartiesQuery
  ): Promise<{ result: Party[] }> {
    const { result } = await this.fetch<FindPartiesResponse>("party", {
      query: findPartiesQuery,
    });

    return { result };
  }

  async findUsers(
    findUsersQuery?: FindUsersQuery
  ): Promise<{ result: User[] }> {
    const { result } = await this.fetch<FindUsersResponse>("user", {
      query: findUsersQuery,
    });

    return { result };
  }

  async findArticles(
    findArticlesQuery?: FindArticlesQuery
  ): Promise<{ result: Article[] }> {
    const { result } = await this.fetch<FindArticlesResponse>("article", {
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

  async findCustomers(
    findCustomersQuery?: FindCustomersQuery
  ): Promise<{ result: Customer[] }> {
    const { result } = await this.fetch<FindCustomersResponse>("customer", {
      query: findCustomersQuery,
    });

    return { result };
  }

  async findContacts(
    findContactsQuery?: FindContactsQuery
  ): Promise<{ result: Contact[] }> {
    const { result } = await this.fetch<FindContactsResponse>("contact", {
      query: findContactsQuery,
    });

    return { result };
  }

  async findTickets(
    findTicketsQuery?: FindTicketsQuery
  ): Promise<{ result: Ticket[] }> {
    const { result } = await this.fetch<FindTicketsResponse>("ticket", {
      query: findTicketsQuery,
    });

    return { result };
  }
}
