/**
 * Shop Page - Products for purchase
 * Categories: Abel Body Weight Scale, Garmin Watches, Longevity Supplements
 */

import { useState } from 'react';
import {
  TabBar,
  StatusBar,
  Card,
  SectionHeader,
  Badge,
  FilledButton,
  globalStyles,
} from './components';
import type { TabId } from './components';

import {
  Scale,
  Watch,
  Pill,
  Star,
  ChevronRight,
  Heart,
  Activity,
  Zap,
} from 'lucide-react';

// Product type definition
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  badgeVariant?: 'success' | 'activity' | 'heart' | 'body' | 'sleep';
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-elevated)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* Product Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1',
          backgroundColor: 'var(--color-bg-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {product.badge && (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <Badge variant={product.badgeVariant || 'success'}>{product.badge}</Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div style={{ padding: 'var(--space-lg)' }}>
        <h3
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-xs)',
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: 'var(--color-text-tertiary)',
            marginBottom: 'var(--space-sm)',
            lineHeight: 1.4,
          }}
        >
          {product.description}
        </p>

        {/* Rating */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
            marginBottom: 'var(--space-md)',
          }}
        >
          <Star size={14} fill="#F59E0B" color="#F59E0B" />
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)' }}>
            {product.rating}
          </span>
          <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)' }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: 'var(--color-text-primary)',
            }}
          >
            {product.price}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontSize: 14,
                color: 'var(--color-text-tertiary)',
                textDecoration: 'line-through',
              }}
            >
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// Category Header Component
function CategoryHeader({
  icon,
  title,
  color,
  bgColor,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  bgColor: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        marginBottom: 'var(--space-lg)',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-lg)',
          backgroundColor: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </h2>
      </div>
      <ChevronRight size={20} color="var(--color-text-tertiary)" />
    </div>
  );
}

// Product data
const abelProducts: Product[] = [
  {
    id: 'abel-scale-1',
    name: 'Abel Body Composition Scale',
    description: 'Advanced body composition analysis with 14 metrics',
    price: '$149',
    originalPrice: '$199',
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    badge: 'Best Seller',
    badgeVariant: 'success',
  },
  {
    id: 'abel-scale-2',
    name: 'Abel Scale Pro',
    description: 'Medical-grade precision with ECG & PWV measurements',
    price: '$299',
    rating: 4.8,
    reviews: 1203,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop',
    badge: 'New',
    badgeVariant: 'activity',
  },
];

const garminProducts: Product[] = [
  {
    id: 'garmin-1',
    name: 'Garmin Venu 3',
    description: 'Advanced health & fitness GPS smartwatch with AMOLED display',
    price: '$449',
    rating: 4.7,
    reviews: 3421,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    badge: 'Popular',
    badgeVariant: 'heart',
  },
  {
    id: 'garmin-2',
    name: 'Garmin Fenix 8',
    description: 'Premium multisport GPS watch with advanced training features',
    price: '$899',
    originalPrice: '$999',
    rating: 4.9,
    reviews: 1876,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop',
  },
  {
    id: 'garmin-3',
    name: 'Garmin Forerunner 265',
    description: 'Running watch with training readiness & race predictor',
    price: '$449',
    rating: 4.8,
    reviews: 2134,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
  },
];

const supplementProducts: Product[] = [
  {
    id: 'supp-1',
    name: 'NMN 500mg - Longevity Formula',
    description: 'Premium NAD+ precursor for cellular energy & healthy aging',
    price: '$79',
    originalPrice: '$99',
    rating: 4.8,
    reviews: 4521,
    image: '/products/Longevity Complex.png',
    badge: 'Top Rated',
    badgeVariant: 'success',
  },
  {
    id: 'supp-2',
    name: 'Resveratrol Complex',
    description: 'Sirtuin activator with trans-resveratrol & quercetin',
    price: '$59',
    rating: 4.6,
    reviews: 2187,
    image: '/products/Reservatrol.png',
  },
  {
    id: 'supp-3',
    name: 'Omega-3 Ultra Pure',
    description: 'High-potency EPA/DHA from wild-caught fish',
    price: '$45',
    rating: 4.9,
    reviews: 5632,
    image: '/products/Omega 3.png',
    badge: 'Essential',
    badgeVariant: 'activity',
  },
  {
    id: 'supp-4',
    name: 'Vitamin D3 + K2',
    description: 'Optimal bone & cardiovascular support formula',
    price: '$35',
    rating: 4.7,
    reviews: 3891,
    image: '/products/Longevity Complex.png',
  },
];

interface ShopPageProps {
  hideTabBar?: boolean;
}

export function ShopPage({ hideTabBar = false }: ShopPageProps) {
  const [activeTab, setActiveTab] = useState<TabId>('shop');

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--color-bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{globalStyles}</style>

      {/* iOS Status Bar */}
      <StatusBar variant="dark" batteryLevel={87} />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 56,
          padding: '0 var(--space-xl)',
          backgroundColor: 'var(--color-bg-primary)',
          borderBottom: '1px solid var(--color-border-separator)',
        }}
      >
        <h1
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
          }}
        >
          Shop
        </h1>
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {/* Hero Banner */}
        <div
          style={{
            margin: 'var(--space-lg)',
            padding: 'var(--space-xl)',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Badge variant="success">Member Exclusive</Badge>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                marginTop: 'var(--space-md)',
                marginBottom: 'var(--space-sm)',
              }}
            >
              Optimize Your Health
            </h2>
            <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 'var(--space-lg)' }}>
              Premium devices & supplements curated for longevity
            </p>
            <FilledButton>Explore Collection</FilledButton>
          </div>
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -40,
              right: 60,
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.03)',
            }}
          />
        </div>

        {/* Abel Body Weight Section */}
        <div style={{ padding: '0 var(--space-lg) var(--space-xl)' }}>
          <CategoryHeader
            icon={<Scale size={22} />}
            title="Abel Body Weight"
            color="#5C8A4D"
            bgColor="#D1FAE5"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--space-md)',
            }}
          >
            {abelProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Garmin Watches Section */}
        <div style={{ padding: '0 var(--space-lg) var(--space-xl)' }}>
          <CategoryHeader
            icon={<Watch size={22} />}
            title="Garmin Watches"
            color="#C75B7A"
            bgColor="#FCE4EC"
          />
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-md)',
              overflowX: 'auto',
              paddingBottom: 'var(--space-sm)',
              marginLeft: 'calc(var(--space-lg) * -1)',
              marginRight: 'calc(var(--space-lg) * -1)',
              paddingLeft: 'var(--space-lg)',
              paddingRight: 'var(--space-lg)',
            }}
          >
            {garminProducts.map((product) => (
              <div key={product.id} style={{ minWidth: 200, flexShrink: 0 }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Longevity Supplements Section */}
        <div style={{ padding: '0 var(--space-lg) var(--space-xl)' }}>
          <CategoryHeader
            icon={<Pill size={22} />}
            title="Longevity Supplements"
            color="#7C3AED"
            bgColor="#EDE9FE"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--space-md)',
            }}
          >
            {supplementProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Bottom spacing for tab bar */}
        <div style={{ height: 100 }} />
      </div>

      {/* Tab Bar */}
      {!hideTabBar && (
        <TabBar
          activeId={activeTab}
          onChange={setActiveTab}
        />
      )}
    </div>
  );
}

export default ShopPage;
