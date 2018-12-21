<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LikeRepository")
 */
class Jaime
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $valeur;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Photo", inversedBy="likes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $photo;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="jaimes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValeur(): ?bool
    {
        return $this->valeur;
    }

    public function setValeur(?bool $valeur): self
    {
        $this->valeur = $valeur;

        return $this;
    }

    public function getPhoto(): ?Photo
    {
        return $this->photo;
    }

    public function setPhoto(?Photo $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
