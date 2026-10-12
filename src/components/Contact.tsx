'use client';

import { FormEvent, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  PiCheckCircle,
  PiPaperPlaneTilt,
  PiWarningCircle,
} from 'react-icons/pi';
import MotionWrapper from './MotionWrapper';
import SectionHeading from './SectionHeading';

type FieldName = 'email' | 'message';
type FieldErrors = Partial<Record<FieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(form: HTMLFormElement): FieldErrors {
  const data = new FormData(form);
  const email = String(data.get('email') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();
  const errors: FieldErrors = {};

  if (!email) errors.email = 'Enter your email so I can reply.';
  else if (!EMAIL_PATTERN.test(email))
    errors.email = 'That email address looks incomplete.';

  if (!message) errors.message = 'Write a message before sending.';
  else if (message.length < 10)
    errors.message = 'Add a little more detail (at least 10 characters).';

  return errors;
}

const fieldClass =
  'w-full rounded-xl bg-canvas-light/70 px-4 py-3 text-base text-primary-light ring-1 ring-inset ring-line-light transition duration-200 placeholder:text-secondary-light/70 hover:ring-accent-light focus:bg-surface-light focus:outline-none focus:ring-2 focus:ring-accentHover-light aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-500/80 dark:bg-canvas-dark/60 dark:text-primary-dark dark:ring-line-dark dark:placeholder:text-secondary-dark/60 dark:hover:ring-accent-dark dark:focus:bg-surface-dark dark:focus:ring-accentHover-dark dark:aria-[invalid=true]:ring-red-400/80';

const labelClass = 'mb-2 block text-sm font-medium';
const errorClass =
  'mt-2 flex items-center gap-1.5 text-sm font-medium text-red-600 dark:text-red-400';

export default function ContactForm() {
  const [state, handleSubmit, reset] = useForm('mjvqgqee');
  const [errors, setErrors] = useState<FieldErrors>({});

  const formErrors = state.errors?.getFormErrors() ?? [];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const nextErrors = validate(e.currentTarget);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      e.preventDefault();
      e.currentTarget
        .querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }
    handleSubmit(e);
  };

  const clearError = (field: FieldName) =>
    errors[field] && setErrors((prev) => ({ ...prev, [field]: undefined }));

  return (
    <div>
      <SectionHeading index="05" title="Contact" id="contact-heading">
        Curious about my work or have something in mind? Email me at{' '}
        <a
          href="mailto:kameelkas@gmail.com"
          className="link-underline text-primary-light dark:text-primary-dark"
        >
          kameelkas@gmail.com
        </a>{' '}
        or send a message below. I&apos;m always happy to connect and chat.
      </SectionHeading>

      <MotionWrapper className="rounded-3xl bg-surface-light/80 p-6 shadow-soft ring-1 ring-inset ring-line-light/70 sm:p-10 dark:bg-surface-dark/70 dark:shadow-soft-dark dark:ring-line-dark/60">
        {state.succeeded ? (
          <div role="status" className="flex flex-col items-start gap-4 py-6">
            <PiCheckCircle
              aria-hidden="true"
              className="h-10 w-10 text-accentHover-light dark:text-accentHover-dark"
            />
            <div>
              <p className="text-2xl font-semibold tracking-[-0.02em]">
                Message received.
              </p>
              <p className="mt-2 max-w-prose text-base leading-relaxed text-secondary-light dark:text-secondary-dark">
                Thanks for reaching out. I&apos;ll reply to the email you
                provided, usually within a couple of days.
              </p>
            </div>
            <button type="button" onClick={reset} className="btn-quiet mt-2">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="email" className={labelClass}>
                Your email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                onChange={() => clearError('email')}
                className={fieldClass}
              />
              {errors.email && (
                <p id="email-error" className={errorClass}>
                  <PiWarningCircle aria-hidden="true" />
                  {errors.email}
                </p>
              )}
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What would you like to talk about?"
                required
                rows={7}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                onChange={() => clearError('message')}
                className={`${fieldClass} min-h-40 resize-y leading-relaxed`}
              />
              {errors.message && (
                <p id="message-error" className={errorClass}>
                  <PiWarningCircle aria-hidden="true" />
                  {errors.message}
                </p>
              )}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className={errorClass}
              />
            </div>

            {formErrors.length > 0 && (
              <p
                role="alert"
                className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300"
              >
                <PiWarningCircle aria-hidden="true" className="shrink-0" />
                Your message didn&apos;t send. Check your connection and try
                again, or email me directly.
              </p>
            )}

            <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-secondary-light dark:text-secondary-dark">
                Both fields are required.
              </p>
              <button
                type="submit"
                disabled={state.submitting}
                aria-busy={state.submitting}
                className="btn-primary group w-full sm:w-auto"
              >
                {state.submitting ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <PiPaperPlaneTilt
                      aria-hidden="true"
                      className="text-lg transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </MotionWrapper>
    </div>
  );
}
