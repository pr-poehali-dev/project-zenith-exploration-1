import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Наконец-то платформа, которая не требует недель настройки. Запустили за день — и сразу в бой. Продуктивность команды выросла вдвое.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Анна Смирнова",
    role: "CEO в TechFlow",
  },
  {
    text: "Перешли с трёх разных инструментов на один. Теперь вся команда в одном пространстве, без путаницы и потери задач.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Максим Волков",
    role: "Операционный директор в Quantum",
  },
  {
    text: "ROI стал виден уже в первый месяц. Мы сэкономили 40 часов в неделю только на ручных процессах.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Елена Новикова",
    role: "Head of Product в Alpine",
  },
  {
    text: "Онбординг прошёл удивительно быстро. Команда из 20 человек освоилась за три дня без единого обучения.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Парк",
    role: "IT-директор в Stellar",
  },
  {
    text: "Поддержка отвечает быстрее, чем мои коллеги. Серьёзно — каждый вопрос решается за минуты, не дни.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Мария Ковальски",
    role: "COO в Nova Industries",
  },
  {
    text: "Интеграции работают из коробки. Подключили Slack, Jira и Stripe за один вечер. Никакого программирования.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Орлов",
    role: "CEO в Meridian Tech",
  },
  {
    text: "Раньше мы тратили пятницы на сбор отчётов. Теперь дашборд показывает всё в реальном времени. Пятницы наши.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Лиза Томпсон",
    role: "Head of Analytics в Cascade",
  },
  {
    text: "Лучшее решение для распределённой команды. Все в одном месте, независимо от часового пояса.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Михаил Чен",
    role: "Product Manager в Vertex",
  },
  {
    text: "Мы выпускаем фичи в 3 раза быстрее. Платформа убрала всё лишнее и оставила только то, что важно.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Рахиль Ким",
    role: "Engineering Lead в Prism",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["TechFlow", "Quantum", "Alpine Ventures", "Stellar", "Nova Industries", "Meridian Tech", "Prism Digital", "Vertex Labs"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Реальные результаты, реальные люди
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Более 12 000 команд уже изменили способ своей работы.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Нам доверяют лидеры индустрии</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}