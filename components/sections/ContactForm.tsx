'use client';

import { useSearchParams } from 'next/navigation';
import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { contacts } from '@/content/contacts';
import { cn } from '@/lib/cn';

type FieldName = 'type' | 'name' | 'phone';
type Errors = Partial<Record<FieldName, string>>;

const f = contacts.form;
const validTypes = new Set<string>(f.type.options.map((o) => o.value));

const control =
  'h-14 w-full rounded-sm border border-line-strong bg-white px-4 text-16 text-ink outline-none transition-colors placeholder:text-ink-50 focus:border-ink aria-invalid:border-error';

function Field({ label, error, children, className }: { label: string; error?: string; children: (ids: { id: string; errId: string }) => ReactNode; className?: string }) {
  const id = useId();
  const errId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-14 font-medium">
        {label}
      </label>
      {children({ id, errId })}
      {error ? (
        <p id={errId} className="mt-2 text-14 text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Сама форма. Без отправки: в MVP заявка уходит в console.log. */
export function ContactFormFields({ defaultType = '' }: { defaultType?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const type = String(data.get('type') ?? '');
    const name = String(data.get('name') ?? '').trim();
    const digits = String(data.get('phone') ?? '').replace(/\D/g, '');

    const next: Errors = {};
    if (!validTypes.has(type)) next.type = f.errors.type;
    if (!name) next.name = f.errors.name;
    if (!(digits.length === 11 && /^[78]/.test(digits))) next.phone = f.errors.phone;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: отправка заявки (CRM, Telegram-бот или почта). Пока — только в консоль.
    console.log('Заявка с сайта', { type, name, phone: `+7${digits.slice(1)}` });
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="mt-10 rounded-sm border-l-2 border-lime bg-white p-6 md:p-8">
        <p className="text-24 font-semibold">{f.success.title}</p>
        <p className="mt-2 text-16 text-ink-70">{f.success.text}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="mt-10 grid gap-5 rounded-sm bg-white p-6 md:grid-cols-2 md:p-8">
      <Field label={f.type.label} error={errors.type} className="md:col-span-2">
        {({ id, errId }) => (
          <div className="relative">
            <select
              id={id}
              name="type"
              defaultValue={defaultType}
              aria-invalid={errors.type ? true : undefined}
              aria-describedby={errors.type ? errId : undefined}
              className={cn(control, 'appearance-none pr-12')}
            >
              <option value="" disabled>
                {f.type.placeholder}
              </option>
              {f.type.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        )}
      </Field>

      <Field label={f.name.label} error={errors.name}>
        {({ id, errId }) => (
          <input
            id={id}
            name="name"
            autoComplete="name"
            placeholder={f.name.placeholder}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? errId : undefined}
            className={control}
          />
        )}
      </Field>

      <Field label={f.phone.label} error={errors.phone}>
        {({ id, errId }) => (
          <input
            id={id}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={f.phone.placeholder}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? errId : undefined}
            className={cn(control, 'tnum')}
          />
        )}
      </Field>

      <div className="flex flex-col gap-4 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <Button type="submit" size="lg" className="w-full md:w-auto">
          {f.submit}
        </Button>
        <p className="text-14 text-ink-50 md:max-w-[20rem]">{f.consent}</p>
      </div>
    </form>
  );
}

/** Обёртка: карточки каталога ведут на /?type=kitchens#contacts — тип подставляется сам. */
export function ContactForm() {
  const preset = useSearchParams().get('type') ?? '';
  const type = validTypes.has(preset) ? preset : '';
  return <ContactFormFields key={type} defaultType={type} />;
}
