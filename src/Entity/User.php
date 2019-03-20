<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      accessControl="is_granted('ROLE_USER')",
 *      normalizationContext={"groups"={"get_user"}},
 *      collectionOperations={
 *          "get"={"normalization_context"={"groups"={"get_users"}}},
 *          "post"={"normalization_context"={"groups"={"post_user"}}}
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Entity(Table(name="iutagram_user"))
 */
class User implements UserInterface
{
    /**
     * @Groups({"get_users", "get_user","get_photo","get_commentaire","get_jaime"})
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"get_users", "get_user","get_photo","get_commentaire","get_jaime"})
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /**
     * @Groups({"get_users", "get_user"})
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @Groups({"get_users", "get_user"})
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @Groups({"get_users", "get_user"})
     * @ORM\Column(type="string", length=255)
     */
    private $prenom;

    /**
     * @Groups({"get_users","get_user"})
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @Groups({"get_user"})
     * @ORM\OneToMany(targetEntity="App\Entity\Photo", mappedBy="user", orphanRemoval=true)
     */
    private $photos;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Jaime", mappedBy="user")
     */
    private $jaimes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Commentaire", mappedBy="user", orphanRemoval=true)
     */
    private $commentaires;

    /**
     * @Groups({"get_user"})
     * @ORM\OneToMany(targetEntity="App\Entity\Follower", mappedBy="follow", orphanRemoval=true)
     */
    private $follow;

    /**
     * @Groups({"get_user"})
     * @ORM\OneToMany(targetEntity="App\Entity\Follower", mappedBy="followed", orphanRemoval=true)
     */
    private $followed;

    public function __construct()
    {
        $this->photos = new ArrayCollection();
        $this->jaimes = new ArrayCollection();
        $this->commentaires = new ArrayCollection();
        $this->follow = new ArrayCollection();
        $this->followed = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection|Photo[]
     */
    public function getPhotos(): Collection
    {
        return $this->photos;
    }

    public function addPhoto(Photo $photo): self
    {
        if (!$this->photos->contains($photo)) {
            $this->photos[] = $photo;
            $photo->setUser($this);
        }

        return $this;
    }

    public function removePhoto(Photo $photo): self
    {
        if ($this->photos->contains($photo)) {
            $this->photos->removeElement($photo);
            // set the owning side to null (unless already changed)
            if ($photo->getUser() === $this) {
                $photo->setUser(null);
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
            $jaime->setUser($this);
        }

        return $this;
    }

    public function removeJaime(Jaime $jaime): self
    {
        if ($this->jaimes->contains($jaime)) {
            $this->jaimes->removeElement($jaime);
            // set the owning side to null (unless already changed)
            if ($jaime->getUser() === $this) {
                $jaime->setUser(null);
            }
        }

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
            $commentaire->setUser($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaire $commentaire): self
    {
        if ($this->commentaires->contains($commentaire)) {
            $this->commentaires->removeElement($commentaire);
            // set the owning side to null (unless already changed)
            if ($commentaire->getUser() === $this) {
                $commentaire->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Follower[]
     */
    public function getFollow(): Collection
    {
        return $this->follow;
    }

    public function addFollow(Follower $follow): self
    {
        if (!$this->follow->contains($follow)) {
            $this->follow[] = $follow;
            $follow->setFollow($this);
        }

        return $this;
    }

    public function removeFollow(Follower $follow): self
    {
        if ($this->follow->contains($follow)) {
            $this->follow->removeElement($follow);
            // set the owning side to null (unless already changed)
            if ($follow->getFollow() === $this) {
                $follow->setFollow(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Follower[]
     */
    public function getFollowed(): Collection
    {
        return $this->followed;
    }

    public function addFollowed(Follower $followed): self
    {
        if (!$this->followed->contains($followed)) {
            $this->followed[] = $followed;
            $followed->setFollowed($this);
        }

        return $this;
    }

    public function removeFollowed(Follower $followed): self
    {
        if ($this->followed->contains($followed)) {
            $this->followed->removeElement($followed);
            // set the owning side to null (unless already changed)
            if ($followed->getFollowed() === $this) {
                $followed->setFollowed(null);
            }
        }

        return $this;
    }
}
