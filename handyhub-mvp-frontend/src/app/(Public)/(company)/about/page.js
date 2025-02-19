import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import AboutUsContainer from "./_components/AboutUsContainer";

export const metadata = {
  title: "About Us",
  description: "About Us page",
};

export default function page() {
  return (
    <ResponsiveContainer className="lg:mx-auto lg:w-3/4">
      <h1 className="mb-10 text-5xl font-extrabold text-primary-black">
        About Us
      </h1>

      <AboutUsContainer />
    </ResponsiveContainer>
  );
}
