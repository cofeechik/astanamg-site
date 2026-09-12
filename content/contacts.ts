import { COMPANY, SITE_URL } from '@/lib/company';
import { catalog } from './catalog';

export const contacts = {
  eyebrow: 'Контакты',
  title: 'Рассчитаем стоимость',
  lead: 'Заполните три поля — заявка уйдёт нам в WhatsApp, останется только нажать «отправить». Уточним задачу и договоримся о бесплатном замере.',
  form: {
    type: {
      label: 'Тип мебели',
      placeholder: 'Выберите направление',
      options: [
        ...catalog.all.map((item) => ({ value: item.id, label: item.formLabel })),
        { value: 'other', label: 'Другое' },
      ],
    },
    name: { label: 'Имя', placeholder: 'Как к вам обращаться' },
    phone: { label: 'Телефон', placeholder: '+7 700 000 00 00' },
    submit: 'Отправить в WhatsApp',
    // TODO: страницы политики конфиденциальности пока нет — добавить ссылку.
    consent: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных.',
    /** Текст, который подставляется в WhatsApp. */
    message: (v: { type: string; name: string; phone: string }) =>
      `Заявка с сайта ${SITE_URL.replace('https://', '')}\nТип мебели: ${v.type}\nИмя: ${v.name}\nТелефон: ${v.phone}`,
    success: {
      title: 'Открываем WhatsApp',
      text: `Если приложение не открылось — позвоните, ответим сразу: ${COMPANY.phone.display}`,
    },
    errors: {
      type: 'Выберите тип мебели',
      name: 'Укажите имя',
      phone: 'Проверьте номер: +7 и 10 цифр',
    },
  },
  details: {
    phoneLabel: 'Телефон',
    whatsappLabel: 'Написать в WhatsApp',
    addressLabel: 'Адрес цеха',
    hoursLabel: 'Режим работы',
    routeLabel: 'Построить маршрут в 2GIS',
  },
} as const;
