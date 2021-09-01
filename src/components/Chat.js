import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useRef, useState } from "react";
import "../css/chat.css";
import { FaChevronRight, FaSignOutAlt } from "react-icons/fa";

firebase.initializeApp({
  apiKey: "AIzaSyB4UODBZEa7wn5YVd4X0KgXlC23EiXXqz4",
  authDomain: "technika-3236c.firebaseapp.com",
  projectId: "technika-3236c",
  storageBucket: "technika-3236c.appspot.com",
  messagingSenderId: "918667059732",
  appId: "1:918667059732:web:629281bd7f7c49fd0c3d01",
  measurementId: "G-RX1SF6F21R",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = () => {
  const [user] = useAuthState(auth);

  return <>{user ? <ChatBox /> : <Login />}</>;
};

function ChatBox() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(50);
  const [messages] = useCollectionData(query, { idField: "id" });

  console.log(messages);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = formValue;
    setFormValue("");

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    dummy.current.scrollIntoView({ behavior: "smooth" });

    document
      .querySelector(".convo-hold")
      .scrollTo(0, document.querySelector(".convo-hold").scrollHeight);
  };

  useEffect(() => {
    document
      .querySelector(".convo-hold")
      .scrollTo(0, document.querySelector(".convo-hold").scrollHeight);
  });

  return (
    <div className="container chat-hold">
      <SignOut />
      <div className="chat-box">
        <main className="convo-hold">
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

          <span ref={dummy}></span>
        </main>

        <form onSubmit={sendMessage} className="input">
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Type your message here"
          />

          <button id="send" type="submit" disabled={!formValue}>
            <FaChevronRight />
          </button>
        </form>
      </div>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt="pfp"
        />
        <div className="msg-content">
          {/* <h2>{`${createdAt.toDate().getDate()}/${
            parseInt(createdAt.toDate().getMonth()) + 1
          }/${createdAt.toDate().getFullYear()}`}</h2> */}
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

function Login() {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="space">
      <button id="login" onClick={signIn}>
        Sign in with Google
      </button>
    </div>
  );
}
function SignOut() {
  return (
    <button id="out" className="btn" onClick={() => auth.signOut()}>
      <FaSignOutAlt />
    </button>
  );
}

export default Chat;
