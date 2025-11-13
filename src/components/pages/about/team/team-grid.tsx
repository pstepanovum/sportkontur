// FILE: src/components/pages/about/team/team-grid.tsx

const teamMembers = [
  {
    id: 1,
    name: "Александр Иванов",
    position: "Генеральный директор",
    description: "Более 15 лет опыта в индустрии детских площадок",
    image: "/images/team-member-1.jpg",
  },
  {
    id: 2,
    name: "Елена Петрова",
    position: "Главный инженер",
    description: "Специалист по проектированию игровых комплексов",
    image: "/images/team-member-2.jpg",
  },
  {
    id: 3,
    name: "Михаил Сидоров",
    position: "Руководитель производства",
    description: "Контроль качества на всех этапах производства",
    image: "/images/team-member-3.jpg",
  },
  {
    id: 4,
    name: "Ольга Смирнова",
    position: "Менеджер по работе с клиентами",
    description: "Консультации и сопровождение проектов",
    image: "/images/team-member-4.jpg",
  },
  {
    id: 5,
    name: "Дмитрий Козлов",
    position: "Начальник отдела монтажа",
    description: "Профессиональная установка оборудования",
    image: "/images/team-member-5.jpg",
  },
  {
    id: 6,
    name: "Анна Новикова",
    position: "Дизайнер проектов",
    description: "Создание уникальных дизайн-проектов площадок",
    image: "/images/team-member-6.jpg",
  },
];

export default function TeamGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-neutral-100)" }}
          >
            Познакомьтесь с нашей командой
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-neutral-60)" }}
          >
            Опытные профессионалы на каждом этапе работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl overflow-hidden text-center"
              style={{
                border: "1.5px solid var(--color-border-light)",
              }}
            >
              <div
                className="relative h-80 bg-gradient-to-br overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary-surface) 0%, var(--color-neutral-20) 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-8xl"
                    style={{ color: "var(--color-neutral-40)" }}
                  >
                    👤
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: "var(--color-neutral-100)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "var(--color-primary-main)" }}
                >
                  {member.position}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-neutral-60)" }}
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
