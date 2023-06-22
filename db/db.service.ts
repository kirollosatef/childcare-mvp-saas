import { Pool, PoolClient } from "pg";
import { config } from "dotenv";

config();

export class DBService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
    });
  }

  public async query(sql: string, values: any[] = []) {
    const client: PoolClient = await this.pool.connect();
    let result: any;
    try {
      await client.query("BEGIN");
      result = await client.query(sql, values);
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
    return result;
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}

export default DBService;
