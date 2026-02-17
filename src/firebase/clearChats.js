import { ref, remove } from 'firebase/database';
import { database } from './config';

export const clearAllMessages = async () => {
  try {
    const messagesRef = ref(database, 'messages');
    await remove(messagesRef);
    console.log('All messages cleared successfully!');
    return { success: true, message: 'All messages cleared successfully!' };
  } catch (error) {
    console.error('Error clearing messages:', error);
    return { success: false, message: 'Error clearing messages: ' + error.message };
  }
};
