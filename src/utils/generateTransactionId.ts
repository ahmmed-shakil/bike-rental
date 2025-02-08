import { v4 as uuidv4 } from "uuid";

const generateTransactionId = (prefix: string = "TXN"): string => {
  // Get current timestamp
  const timestamp = Date.now();

  // Generate a UUID
  const uuid = uuidv4();

  // Take first 8 characters of UUID
  const shortUuid = uuid.split("-")[0];

  // Combine prefix, timestamp, and UUID
  const transactionId = `${prefix}_${timestamp}_${shortUuid}`;

  return transactionId;
};

export default generateTransactionId;
