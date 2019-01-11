<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GetImagesTest extends WebTestCase
{
    public function testSomething()
    {
        $this->assertTrue(true);
    }
    public function test_api_returns_image_list()
    {
        $client = $this->createClient();

        $client->request('GET', '/api/photos', [], [], ['HTTP_ACCEPT' => 'application/ld+json']);

        $this->assertSame(200, $client->getResponse()->getStatusCode());
        $this->assertSame('application/ld+json; charset=utf-8',
            $client->getResponse()->headers->get('Content-Type'));

        $content = json_decode($client->getResponse()->getContent(), true);

    }
}
