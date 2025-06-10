import StatCard from "@/components/common/StatCard";

const TrustBar = () => {
  return (
    <section className="py-16 bg-jet-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
              </svg>
            }
            value="40+"
            label="Years Combined Experience"
            delay={0.1}
          />
          
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v12H2V10l10-9Z"></path>
                <path d="M14 15c0 1.105-0.895 2-2 2s-2-0.895-2-2 0.895-2 2-2 2 0.895 2 2Z"></path>
              </svg>
            }
            value="100+"
            label="Clients Served"
            delay={0.2}
          />
          
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 12 2 2 4-4"></path>
                <path d="M5.7 19.3 12 13l4.2 4.2a2.8 2.8 0 0 0 4 0l.197-.197a2.8 2.8 0 0 0 0-3.976L17.172 9.8a2.8 2.8 0 0 0-3.976 0L12 10.997"></path>
                <path d="M5.7 19.3a2.8 2.8 0 0 1-4-4l9.3-9.3 1 1"></path>
              </svg>
            }
            value="100%"
            label="Money-Back Guarantee"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
