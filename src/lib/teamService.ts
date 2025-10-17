import { db } from './firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { TeamMember, TeamMemberFormData } from './types';

const TEAM_COLLECTION = 'teamMembers';

export async function createTeamMember(data: TeamMemberFormData, imageBase64?: string): Promise<string> {
  const docRef = await addDoc(collection(db, TEAM_COLLECTION), {
    ...data,
    imageBase64: imageBase64 || '',
    createdAt: Date.now(),
  });
  return docRef.id;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const querySnapshot = await getDocs(collection(db, TEAM_COLLECTION));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as TeamMember[];
}

export async function getTeamMemberById(id: string): Promise<TeamMember | null> {
  const docRef = doc(db, TEAM_COLLECTION, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as TeamMember;
  }
  return null;
}

export async function updateTeamMember(id: string, data: Partial<TeamMemberFormData>, imageBase64?: string): Promise<void> {
  const docRef = doc(db, TEAM_COLLECTION, id);
  await updateDoc(docRef, {
    ...data,
    ...(imageBase64 !== undefined ? { imageBase64 } : {}),
  });
}

export async function deleteTeamMember(id: string): Promise<void> {
  const docRef = doc(db, TEAM_COLLECTION, id);
  await deleteDoc(docRef);
} 