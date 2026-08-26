import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AscentMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="text-center">
        <AscentMark className="mx-auto h-10 w-10" />
        <p className="mt-8 eyebrow">404</p>
        <h1 className="mt-4 text-3xl leading-[1.1] text-ink sm:text-4xl">
          This page didn&rsquo;t make the cut.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-stone-600">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Button href="/" size="lg" className="mt-8" trackId="404_home">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
