import mongoose from 'mongoose';

let connection = {}; // Keep the connection object outside the function for caching

export const connectToDB = async () => {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connection.readyState;
  } catch (error) {
    throw new Error(error);
  }
};
