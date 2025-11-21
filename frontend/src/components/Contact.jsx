import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace with actual API endpoint when backend is ready
      const response = await fetch('/api/contact/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl text-primary" />,
      title: 'Telefon',
      content: '+48 453 516 366',
      link: 'tel:+48453516366',
    },
    {
      icon: <FaEnvelope className="text-3xl text-primary" />,
      title: 'Email',
      content: 'biuro@atbalance.pl',
      link: 'mailto:biuro@atbalance.pl',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary" />,
      title: 'Adres',
      content: 'Warszawa, Polska',
      link: null,
    },
    {
      icon: <FaClock className="text-3xl text-primary" />,
      title: 'Godziny pracy',
      content: 'Pn-Pt: 9:00-17:00',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Skontaktuj się z nami
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Masz pytania? Chcesz dowiedzieć się więcej o naszych usługach? Napisz do nas!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              Dane kontaktowe
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-secondary mb-3">
                Potrzebujesz pomocy?
              </h4>
              <p className="text-gray-600 mb-4">
                Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami telefonicznie lub
                wypełnij formularz kontaktowy, a odezwiemy się najszybciej jak to możliwe.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              Formularz kontaktowy
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Imię i nazwisko <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {
                    required: 'To pole jest wymagane',
                    minLength: {
                      value: 2,
                      message: 'Imię musi mieć minimum 2 znaki',
                    },
                  })}
                  className="input-field"
                  placeholder="Jan Kowalski"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'To pole jest wymagane',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Nieprawidłowy adres email',
                    },
                  })}
                  className="input-field"
                  placeholder="jan@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="input-field"
                  placeholder="+48 123 456 789"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Wiadomość <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', {
                    required: 'To pole jest wymagane',
                    minLength: {
                      value: 10,
                      message: 'Wiadomość musi mieć minimum 10 znaków',
                    },
                  })}
                  className="textarea-field"
                  placeholder="Opisz czym możemy Ci pomóc..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Consent */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  {...register('consent', {
                    required: 'Musisz zaakceptować politykę prywatności',
                  })}
                  className="mt-1 mr-3 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  Akceptuję{' '}
                  <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                    politykę prywatności
                  </a>{' '}
                  i wyrażam zgodę na przetwarzanie moich danych osobowych <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-500">{errors.consent.message}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Dziękujemy! Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  Przepraszamy, wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
