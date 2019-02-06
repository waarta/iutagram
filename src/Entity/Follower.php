<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      accessControl="is_granted('ROLE_USER')",
 *      normalizationContext={"groups"={"get_follower"}})
 * @ORM\Entity(repositoryClass="App\Repository\FollowerRepository")
 */
class Follower
{
    /**
     * @Groups({"get_follower"})
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"get_follower"})
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="follow")
     * @ORM\JoinColumn(nullable=false)
     */
    private $follow;

    /**
     * @Groups({"get_follower"})
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="followed")
     * @ORM\JoinColumn(nullable=false)
     */
    private $followed;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFollow(): ?User
    {
        return $this->follow;
    }

    public function setFollow(?User $follow): self
    {
        $this->follow = $follow;

        return $this;
    }

    public function getFollowed(): ?User
    {
        return $this->followed;
    }

    public function setFollowed(?User $followed): self
    {
        $this->followed = $followed;

        return $this;
    }
}
