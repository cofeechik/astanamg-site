import { catalog } from './catalog';

export const contacts = {
  eyebrow: 'Контакты',
  title: 'Рассчитаем стоимость',
  lead: 'Оставьте телефон — перезвоним, уточним задачу и договоримся о бесплатном замере. Или напишите в WhatsApp с фото помещения.',
  form: {
    type: {
      label: 'Тип мебели',
      placeholder: 'Выберите направление',
      options: [...catalog.all.map((item) => ({ value: item.id, label: item.formLabel })), { value: 'other', label: 'Другое' }],
    },
    name: { label: 'Имя', placeholder: 'Как к вам обращаться' },
    phone: { label: 'Телефон', placeholder: '+7 700 000 00 00' },
    submit: 'Отправить заявку',
    // TODO: страницы политики конфиденциальности пока нет — добавить ссылку.
    consent: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных.',
    success: {
      title: 'Заявка принята',
      text: 'Перезвоним и договоримся о времени замера.',
    },
    errors: {
      type: 'Выберите тип мебели',
      name: 'Укажите имя',
      phone: 'Проверьте номер: нужно 11 цифр, начиная с +7',
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
