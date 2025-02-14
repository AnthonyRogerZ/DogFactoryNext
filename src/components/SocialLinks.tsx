// SocialLinks.tsx
'use client';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const socialLinks = [
  {
    icon: FaFacebookF,
    href: 'https://www.facebook.com/profile.php?id=100063555720065',
    label: 'Facebook',
    color: '#4267B2'
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/dog_factory77',
    label: 'Instagram',
    color: '#E1306C'
  },
  {
    icon: FaTiktok,
    href: 'https://www.tiktok.com/@dog_factory77',
    label: 'TikTok',
    color: '#000000'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label, color }) => (
        <a 
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div 
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: color }}
          >
            <Icon className="text-white text-lg md:text-xl" />
          </div>
        </a>
      ))}
    </div>
  )
}
