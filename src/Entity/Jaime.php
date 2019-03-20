<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      accessControl="is_granted('ROLE_USER')",
 *      normalizationContext={"groups"={"get_jaime"}},
 *      collectionOperations={
 *          "get",
 *          "post"={"normalization_context"={"groups"={"post_jaime"}},
 *                  "denormalization_context"={"groups"={"post_jaime"}}
 *              }
 *     },
 *      itemOperations={
 *         "get",
 *         "delete",
 *         "put"
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\JaimeRepository")
 */
class Jaime
{
    /**
     * @Groups({"get_jaime","get_photo","get_user" ,"post_jaime"})
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"get_jaime","get_photo","get_user" ,"post_jaime"})
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $valeur;

    /**
     * @Groups({"get_jaime" ,"post_jaime"})
     * @ORM\ManyToOne(targetEntity="App\Entity\Photo", inversedBy="jaimes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $photo;

    /**
     * @Groups({"get_jaime","get_photo" ,"post_jaime"})
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
