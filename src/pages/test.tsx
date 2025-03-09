import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Head from 'next/head';

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Test Page - Mattress Selector Canada</title>
      </Head>

      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Test Page</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is a test card to check if the styling is working properly.</p>
          </CardContent>
          <CardFooter>
            <Button>Test Button</Button>
          </CardFooter>
        </Card>
        
        <div className="flex gap-4 justify-center">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
    </div>
  );
} 