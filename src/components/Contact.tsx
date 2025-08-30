'use client';

import { useForm, ValidationError } from '@formspree/react';
import { FiSend } from 'react-icons/fi';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mjvqgqee');

  return (
    <div>
      <h1 className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark">
        Contact
      </h1>
      <p className="mx-10 mb-10 text-center">
        Curious about my work or have something in mind? Don’t hesitate to send
        me an email at{' '}
        <a href="mailto:kameelkas@gmail.com" className="underline">
          kameelkas@gmail.com
        </a>{' '}
        or drop a message below. I’m always excited to connect and chat!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full space-y-5 rounded-lg bg-surface-light p-6 shadow-md dark:bg-surface-dark"
      >
        <div className="flex flex-col">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="rounded-md border border-gray-300 bg-transparent px-4 py-2 placeholder-gray-400 outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-1 text-sm text-red-500"
          />
        </div>

        <div className="flex flex-col">
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            rows={8}
            className="resize-y rounded-md border border-gray-300 bg-transparent px-4 py-2 placeholder-gray-400 outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-1 text-sm text-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="group flex w-fit items-center justify-center gap-3 rounded-lg bg-accent-light px-4 py-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 interactive:bg-accentHover-light dark:bg-accent-dark interactive:dark:bg-accentHover-dark"
        >
          {state.submitting ? (
            'Submitting...'
          ) : (
            <>
              Send
              <FiSend className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-2" />
            </>
          )}
        </button>
      </form>

      {state.succeeded && (
        <p className="mt-4 text-center font-medium text-accent-light dark:text-accent-dark">
          Received. Thanks for your message!
        </p>
      )}
    </div>
  );
}
