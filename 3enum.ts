enum Membership{
  Simple,
  Standart,
  Premium
}

const membership = Membership.Premium
const membershipReverse = Membership[1]
console.log(membershipReverse);
console.log(membership);


enum SocialMedia{
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM"
}

const social = SocialMedia.INSTAGRAM
console.log(social);
