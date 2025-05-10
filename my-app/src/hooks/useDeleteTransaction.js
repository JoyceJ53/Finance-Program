
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useDeleteTransaction = () => {
  const deleteTransaction = async (id) => {
    try {
      await deleteDoc(doc(db, "transactions", id));
      console.log("Transaction deleted successfully!");
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return { deleteTransaction };
};
