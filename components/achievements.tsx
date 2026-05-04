import { Trophy, Award, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from './container';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

const achievements = [
    {
        icon: <Trophy className="h-8 w-8 text-primary" />,
        title: 'Foundry 2026 Winner ',
        description: 'Engineered and built a agentic ai video clipper with multi agent architecture using Ollama and Deepface, leading us to win Best Software Track',
        images: [
            { src: '/foundry_2.JPG', alt: 'Foundry Image 1', hint: 'competition' },
            { src: '/foundry_1.JPG', alt: 'Foundry Image 2', hint: 'clipper' },
            { src: '/foundry_3.JPG', alt: 'Foundry Image 3', hint: 'clipper' },
            { src: '/foundry_4.JPG', alt: 'Foundry Image 4', hint: 'clipper' },
            { src: '/aces_certificate.jpg', alt: 'Foundry Image 5', hint: 'robotics competition' },
        ]

    }
];

export default function Achievements() {
    return (
        <Container id="achievements" className="relative overflow-hidden">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit" />
            <div className="absolute -right-32 -bottom-48 h-96 w-96 rounded-full border-2 border-dashed border-primary/20 orbit-reverse" />
            <h2 className="text-3xl font-bold text-center font-headline sm:text-4xl text-primary fade-in-up">
                Awards & Achievements
            </h2>
            <p className="mt-4 text-center text-muted-foreground md:text-lg fade-in-up animation-delay-200">
                Milestones that mark my dedication and passion for innovation.
            </p>
            <div className="mt-12 grid gap-12 md:grid-cols-1">
                {achievements.map((item, index) => (
                    <Card key={item.title} className="flex flex-col md:flex-row items-center gap-8 p-6 transition-all duration-300 hover:shadow-lg hover:bg-secondary fade-in-up" style={{ animationDelay: `${200 * (index + 2)}ms` }}>
                        <div className="md:w-1/2 w-full">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {item.images.map((image, imgIndex) => (
                                        <CarouselItem key={imgIndex}>
                                            <div className="relative w-full h-96 overflow-hidden rounded-lg">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                    data-ai-hint={image.hint}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                            </Carousel>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-shrink-0">{item.icon}</div>
                                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                            </div>
                            <CardDescription className="text-lg">{item.description}</CardDescription>
                        </div>
                    </Card>
                ))}
            </div>
        </Container>
    );
}
