<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GetUsersTest extends WebTestCase
{
    public function test_api_returns_user_info()
    {
        $client = $this->createClient();

        $client->request('GET', '/api/users/1', [], [], ['HTTP_ACCEPT' => 'application/ld+json']);

        $this->assertSame(200, $client->getResponse()->getStatusCode());
        $this->assertSame('application/ld+json; charset=utf-8',
            $client->getResponse()->headers->get('Content-Type'));

        $content = json_decode($client->getResponse()->getContent(), true);
        //$this->assertTrue(true);

    }
}
