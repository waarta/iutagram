<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"get_photo"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\PhotoRepository")
 */
class Photo
{
    /**
     * @Groups({"get_photo","get_user","get_commentaire","get_jaime"})
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"get_photo","get_user","get_commentaire","get_jaime"})
     * @ORM\Column(type="string", length=2000)
     */
    private $url;

    /**
     * @Groups({"get_photo","get_user","get_commentaire","get_jaime"})
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @Groups({"get_photo","get_user","get_commentaire","get_jaime"})
     * @ORM\Column(type="string", length=500, nullable=true)
     */
    private $description;

    /**
     * @Groups({"get_photo"})
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="photos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @Groups({"get_photo"})
     * @ORM\OneToMany(targetEntity="App\Entity\Commentaire", mappedBy="photo", orphanRemoval=true)
     */
    private $commentaires;

    /**
     * @Groups({"get_photo","get_user"})
     * @ORM\OneToMany(targetEntity="App\Entity\Jaime", mappedBy="photo", orphanRemoval=true)
     */
    private $jaimes;

    public function __construct()
    {
        $this->commentaires = new ArrayCollection();
        $this->jaimes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

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

    /**
     * @return Collection|Commentaire[]
     */
    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }

    public function addCommentaire(Commentaire $commentaire): self
    {
        if (!$this->commentaires->contains($commentaire)) {
            $this->commentaires[] = $commentaire;
            $commentaire->setPhoto($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaire $commentaire): self
    {
        if ($this->commentaires->contains($commentaire)) {
            $this->commentaires->removeElement($commentaire);
            // set the owning side to null (unless already changed)
            if ($commentaire->getPhoto() === $this) {
                $commentaire->setPhoto(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Jaime[]
     */
    public function getJaimes(): Collection
    {
        return $this->jaimes;
    }

    public function addJaime(Jaime $jaime): self
    {
        if (!$this->jaimes->contains($jaime)) {
            $this->jaimes[] = $jaime;
            $jaime->setPhoto($this);
        }

        return $this;
    }

    public function removeJaime(Jaime $jaime): self
    {
        if ($this->jaimes->contains($jaime)) {
            $this->jaimes->removeElement($jaime);
            // set the owning side to null (unless already changed)
            if ($jaime->getPhoto() === $this) {
                $jaime->setPhoto(null);
            }
        }

        return $this;
    }
}
