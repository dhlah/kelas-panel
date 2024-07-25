import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

//? Create new document
const createData = async (table, data) => {
  try {
    const docRef = await addDoc(collection(db, table), data);
    return { status: "OK", data: docRef };
  } catch (e) {
    return { status: "FAILED", error: e };
  }
};

//? Read documents
// Read documents with search and sort capabilities
const readData = async (table, q = null, sort = null) => {
  try {
    let colRef = collection(db, table);
    let qRef = colRef;

    // Apply sorting if sort is provided
    if (sort) {
      if (sort === 'dibuat') {
        qRef = query(qRef, orderBy('dibuat'));
      } else if (sort === 'nama') {
        qRef = query(qRef, orderBy('mapel'));
      } else if (sort === 'dikumpulkan') {
        qRef = query(qRef, orderBy('dikumpulkan'));
      }
    }

    const querySnapshot = await getDocs(qRef);
    let results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });

    // Apply search filter if q is provided
    if (q) {
      const qLower = q.toLowerCase();
      results = results.filter(doc => 
        (doc.mapel && doc.mapel.toLowerCase().includes(qLower)) ||
        (doc.tugas && doc.tugas.toLowerCase().includes(qLower))
      );
    }

    return { status: "OK", data: results };
  } catch (e) {
    return { status: "FAILED", error: e };
  }
};


//? Update document
const updateData = async (table, docId, data) => {
  const docRef = doc(db, table, docId);
  try {
    await updateDoc(docRef, data);
    return { status: "OK", data: docRef };
  } catch (e) {
    return { status: "FAILED", error: e };
  }
};

//? Delete document
const deleteData = async (table, docId) => {
  try {
    await deleteDoc(doc(db, table, docId));
    return { status: "OK" };
  } catch (e) {
    return { status: "FAILED", error: e };
  }
};

export { createData, readData, updateData, deleteData };
