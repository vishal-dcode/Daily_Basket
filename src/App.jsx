import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove } from 'firebase/database';

import logo from './assets/logo/logo.svg';
import plusIcon from './assets/icons/plus.png';

// Firebase configuration
const firebaseConfig = {
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsRef = ref(database, 'items');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemsList = Object.entries(data).map(([key, value]) => ({
          id: key,
          name: value
        }));
        setItems(itemsList);
      } else {
        setItems([]);
      }
    });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      const itemsRef = ref(database, 'items');
      push(itemsRef, inputValue);
      setInputValue('');
    }
  };
  const handleDelete = (id) => {
    const itemRef = ref(database, `items/${id}`);
    remove(itemRef);
  };

  return (
    <main className="container m-auto max-w-2xl min-h-screen flex flex-col justify-items-center">
      <img className="p-5 sm:p-10 w-full" src={logo} alt="Daily Basket Logo" />

      <section className="bg-[var(--clr-ctr)] flex-1 h-full w-full rounded-[2.5rem] p-5 mb-5">
        <form className="relative w-full mb-5">
          <input
            className="w-full px-6 text-2xl placeholder:text-neutral-400 text-neutral-200 bg-[var(--clr-bg)] border border-neutral-400 rounded-full h-16 outline-none"
            type="text"
            placeholder="Enter an item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={(e) => handleAdd(e)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--clr-yellow)] rounded-full w-12 h-12 flex justify-center items-center">
            <img src={plusIcon} alt="" />
          </button>
        </form>

        <div className="flex flex-wrap gap-2">
          {items < 1 && (
            <span className="text-[var(--clr-white)] font-medium whitespace-nowrap flex-auto pt-10 text-center">
              No items in basket
            </span>
          )}
          {items.map((item) => (
            <span
              key={item.id}
              onClick={() => handleDelete(item.id)}
              className="cursor-pointer flex-auto text-[var(--clr-black)] font-medium whitespace-nowrap text-center bg-[var(--clr-yellow)] rounded-full px-5 py-3 hover:bg-[var(--clr-red)] hover:text-[var(--clr-white)]">
              {item.name}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

