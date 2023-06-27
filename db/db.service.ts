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

  /**
   * BEGIN, COMMIT, and ROLLBACK are SQL commands that are used to manage transactions in a database.
   * A transaction is a sequence of operations performed (using one or more SQL statements) on a database as a single logical unit of work.
   * BEGIN is used to start a new transaction. When a transaction is started, a new transaction ID is assigned to the transaction, and all subsequent database operations that are executed within the transaction are associated with this ID
   * COMMIT is used to commit a transaction. When a transaction is committed, all of the changes that were made to the database during the transaction are saved permanently.
   * ROLLBACK is used to roll back a transaction. When a transaction is rolled back, all of the changes that were made to the database during the transaction are undone, and the database is returned to the state it was in before the transaction started.
   */

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
