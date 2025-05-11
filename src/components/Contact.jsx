import { FaAward, FaExchangeAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="flex justify-center p-6 pt-2  px-0.5">
  <div className="bg-white max-w-sm w-full p-6 rounded-none rounded-tr-[4.5rem] rounded-bl-[4.5rem] flex flex-col items-center font-['Roboto']">
        <img
          src="https://www.mikamiyua.io/_next/image?url=%2Fyua%2F2.JPG&w=828&q=75"
          alt="Portrait of a woman in white top lying on a white surface with soft pink background"
          className="w-full rounded-tr-[4.5rem] rounded-bl-[4.5rem] object-cover"
          width="400"
          height="400"
        />
        <h2 className="mt-6 text-center text-gray-800 font-semibold text-lg tracking-wide">
          CONTRACT ADDRESS
        </h2>
        <p className="mt-2 bg-gray-700 text-white text-center rounded-full px-4 py-1 text-sm font-medium select-all max-w-[22rem] break-words">
          MikamiBjh6AGBUU28GZsPAjFxRdGwcjtIkjGjr39Pr7
        </p>
        <p className="mt-3 text-center text-gray-600 text-xs uppercase tracking-widest max-w-[22rem] leading-tight">
          $Mikami BRINGS THE QUEEN OF CULTURE ONTO THE BLOCKCHAIN.
          <br />
          BE PART OF THE LEGEND BEFORE IT BEGINS.
        </p>
        <button
          type="button"
          className="mt-6 bg-gray-700 text-white rounded-md w-40 py-2 text-lg font-medium flex items-center justify-center gap-2"
        >
          <FaAward />
          Chart
        </button>
        <button
          type="button"
          className="mt-4 bg-gray-700 text-white rounded-md w-40 py-2 text-lg font-medium flex items-center justify-center gap-2"
        >
          <FaExchangeAlt />
          Swap
        </button>
      </div>
    </main>
  );
}
