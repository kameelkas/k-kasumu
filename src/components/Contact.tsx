'use client';

import { useForm, ValidationError } from '@formspree/react';
import { FiSend } from 'react-icons/fi';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('your-form-id');

  if (state.succeeded) {
    return (
      <p className="text-center font-medium text-green-600">
        Thanks for your message!
      </p>
    );
  }

  return (
    <div>
      <h1 className="mb-8 text-center text-4xl underline decoration-secondary-light decoration-2 underline-offset-4 sm:text-5xl dark:decoration-secondary-dark">
        Contact
      </h1>
      <p className="text-center mx-10 mb-10">
        Curious about my work or have something in mind? Don’t hesitate to send
        me an email at{' '}
        <a
          href="mailto:kameelkas@gmail.com"
          className="underline"
        >
          kameelkas@gmail.com
        </a>{' '}
        or drop a message below—I’m always excited to connect and chat!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full space-y-5 rounded-lg bg-surface-light dark:bg-surface-dark p-6 shadow-md"
      >
        <div className="flex flex-col">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="rounded-md border bg-transparent border-gray-300 px-4 py-2 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
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
            rows={5}
            className="resize-y rounded-md border bg-transparent border-gray-300 px-4 py-2 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
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
          className="group flex w-fit items-center justify-center gap-3 rounded-lg bg-accent-light dark:bg-accent-dark interactive:dark:bg-accentHover-dark px-4 py-2 font-medium transition-colors interactive:bg-accentHover-light disabled:cursor-not-allowed disabled:opacity-50"
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
    </div>
  );
}
