// import { useState } from 'react';
// import { db } from '../firebase/config';
// import axios from 'axios';
// import { doc, getDoc } from 'firebase/firestore';

// interface PaymentDetails {
//   reason: string;
//   status: boolean;
//   serviceType: string;
//   transactionId: string;
//   documentId: string;
//   paymentId: string;
//   recipientNumber?: string;
//   clientName?: string;
//   verifyType?: string;
//   userId?: string;
// }

// interface VerificationResult {
//   success: boolean;
//   message: string;
// }

// const usePaymentVerification = () => {
//   const [isVerifying, setIsVerifying] = useState(false);
//   const [verificationError, setVerificationError] = useState<string | null>(null);

//   const verifyPayment = async (paymentDetails: PaymentDetails): Promise<VerificationResult> => {
//     if (!paymentDetails || !paymentDetails.userId) {
//       return { success: false, message: 'Invalid payment details.' };
//     }

//     setIsVerifying(true);
//     setVerificationError(null);

//     try {
//       const userRef = doc(db, 'users', paymentDetails.userId);
//       const userDoc = await getDoc(userRef);

//       if (!userDoc.exists()) {
//         console.log('User not found.');
//         return { success: false, message: 'User not found.' };
//       }

//       const userEmail = userDoc.data()?.email;
//       if (!userEmail) {
//         console.log('User email not found.');
//         return { success: false, message: 'User email not found.' };
//       }

//       const endpoint = 'https://us-central1-airstatefinder.cloudfunctions.net/automatedverifychecker';
//       const requestBody = {
//         documentId: paymentDetails.documentId,
//         transactionid: paymentDetails.transactionId.toString(),
//         paymentId: paymentDetails.paymentId,
//         clientsnumber: paymentDetails.recipientNumber || '',
//         clientsname: paymentDetails.clientName || '',
//         paymentFor: paymentDetails.verifyType || '',
//         clientEmail: userEmail,
//       };

//       const { data } = await axios.post(endpoint, requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (data.success) {
//         return { success: true, message: data.message || 'Verification successful.' };
//       } else {
//         return { success: false, message: data.message || 'Verification failed.' };
//       }
//     } catch (error) {
//       console.error('Error during payment verification:', error);
//       setVerificationError(error.message || 'An unexpected error occurred.');
//       return { success: false, message: error.message || 'Verification error.' };
//     } finally {
//       setIsVerifying(false);
//     }
//   };

//   return {
//     isVerifying,
//     verificationError,
//     verifyPayment,
//   };
// };

// export default usePaymentVerification;
