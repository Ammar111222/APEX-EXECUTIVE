import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/lib/AuthContext';

const DebugPage = () => {
  const { currentUser } = useAuth();
  const [firestoreStatus, setFirestoreStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [collections, setCollections] = useState<string[]>([]);
  const [blogCount, setBlogCount] = useState<number>(0);
  const [sampleBlog, setSampleBlog] = useState<any>(null);

  useEffect(() => {
    const checkFirestore = async () => {
      try {
        console.log('Testing Firestore connection...');
        // Try to get the blogs collection
        const blogsQuery = query(collection(db, 'blogs'), limit(1));
        const snapshot = await getDocs(blogsQuery);
        
        console.log('Firestore connection successful', snapshot.docs.length);
        setFirestoreStatus('success');
        setCollections(['blogs']);
        setBlogCount(snapshot.docs.length);
        
        if (snapshot.docs.length > 0) {
          const blogData = snapshot.docs[0].data();
          setSampleBlog({
            id: snapshot.docs[0].id,
            ...blogData
          });
        }
      } catch (error) {
        console.error('Firestore connection failed:', error);
        setErrorMessage(error.message || 'Unknown error');
        setFirestoreStatus('error');
      }
    };

    checkFirestore();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-royal-gold">Debug Information</h1>
      
      <div className="bg-deep-charcoal shadow rounded-lg p-6 mb-6 border border-royal-gold/30">
        <h2 className="text-xl font-semibold mb-4 text-royal-gold">Firebase Configuration</h2>
        <div className="bg-jet-black p-4 rounded overflow-auto text-soft-cream">
          <p><strong className="text-royal-gold">Project ID:</strong> {import.meta.env.VITE_FIREBASE_PROJECT_ID}</p>
          <p><strong className="text-royal-gold">Auth Domain:</strong> {import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}</p>
          <p><strong className="text-royal-gold">Storage Bucket:</strong> apexv1.appspot.com</p>
        </div>
      </div>
      
      <div className="bg-deep-charcoal shadow rounded-lg p-6 mb-6 border border-royal-gold/30">
        <h2 className="text-xl font-semibold mb-4 text-royal-gold">Authentication Status</h2>
        {currentUser ? (
          <div className="p-4 bg-jet-black text-soft-cream rounded border border-royal-gold/50">
            <p><strong className="text-royal-gold">Logged in as:</strong> {currentUser.email}</p>
            <p><strong className="text-royal-gold">User ID:</strong> {currentUser.uid}</p>
          </div>
        ) : (
          <div className="p-4 bg-jet-black text-red-400 rounded border border-red-500/50">
            <p>Not authenticated</p>
          </div>
        )}
      </div>
      
      <div className="bg-deep-charcoal shadow rounded-lg p-6 mb-6 border border-royal-gold/30">
        <h2 className="text-xl font-semibold mb-4 text-royal-gold">Firestore Connection</h2>
        {firestoreStatus === 'loading' && (
          <div className="p-4 bg-jet-black text-soft-cream/70 rounded">
            <p>Testing connection...</p>
          </div>
        )}
        
        {firestoreStatus === 'success' && (
          <div className="p-4 bg-jet-black text-soft-cream rounded border border-royal-gold/50">
            <p className="text-royal-gold font-medium">Firestore connection successful</p>
            <p><strong className="text-royal-gold">Available collections:</strong> {collections.join(', ')}</p>
            <p><strong className="text-royal-gold">Blog count:</strong> {blogCount}</p>
            
            {sampleBlog && (
              <div className="mt-4">
                <h3 className="font-semibold text-royal-gold">Sample Blog Post:</h3>
                <div className="mt-2 bg-deep-charcoal p-3 rounded border border-royal-gold/30">
                  <p><strong className="text-royal-gold">ID:</strong> {sampleBlog.id}</p>
                  <p><strong className="text-royal-gold">Title:</strong> {sampleBlog.title}</p>
                  <p><strong className="text-royal-gold">Template:</strong> {sampleBlog.templateType}</p>
                  {sampleBlog.imageURL && (
                    <div className="mt-2">
                      <p><strong className="text-royal-gold">Image:</strong></p>
                      <div className="w-24 h-24 mt-1">
                        <img 
                          src={sampleBlog.imageURL} 
                          alt="Blog preview" 
                          className="w-full h-full object-cover rounded border border-royal-gold/30"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        
        {firestoreStatus === 'error' && (
          <div className="p-4 bg-jet-black text-red-400 rounded border border-red-500/50">
            <p>Firestore connection failed</p>
            <p><strong className="text-red-400">Error:</strong> {errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebugPage; 