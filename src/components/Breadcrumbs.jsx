import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
      <ol 
        className="breadcrumbs-list" 
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <li 
          className="breadcrumb-item" 
          itemProp="itemListElement" 
          itemScope 
          itemType="https://schema.org/ListItem"
        >
          <Link to="/" className="breadcrumb-link" title="Home" itemProp="item">
            <Home size={14} />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const position = idx + 2;
          return (
            <li 
              key={idx} 
              className="breadcrumb-item" 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight size={14} className="breadcrumb-separator" aria-hidden="true" />
              {isLast || !item.url ? (
                <span className="breadcrumb-current" aria-current="page" itemProp="name">
                  {item.label}
                </span>
              ) : (
                <Link to={item.url} className="breadcrumb-link" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
