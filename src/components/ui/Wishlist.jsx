import React from 'react';
import Head from 'next/head';
import { FaHeart, FaRegHeart, FaFacebook, FaTwitter, FaPinterest, FaShoppingCart, FaCog } from 'react-icons/fa';
import watch from '../../assets/Watche/ChatGPT Image Aug 10, 2025, 10_35_04 PM.png'
const Wishlist = () => {
  // Dummy data for wishlist items
  const wishlistItems = [
    {
      id: 1,
      name: 'Wave t-shirt',
      image: watch,
      originalPrice: 14.99,
      discountedPrice: 13.49,
      quantity: 1,
      stockStatus: 'In Stock',
      addedDate: 'June 17, 2024',
      hasDiscount: true,
      buttonType: 'addToCart',
      description: 'Comfortable wave-patterned t-shirt made from 100% organic cotton',
      category: 'Clothing'
    },
    {
      id: 2,
      name: 'T-Shirt with Logo',
      image: 'https://example.com/images/logo-tshirt.jpg',
      price: 18.00,
      quantity: 1,
      stockStatus: 'In Stock',
      addedDate: 'June 17, 2024',
      buttonType: 'addToCart',
      description: 'Premium quality t-shirt with company logo embroidery',
      category: 'Clothing'
    },
    {
      id: 3,
      name: 'Hiking shoes',
      image: 'https://example.com/images/hiking-shoes.jpg',
      price: 104.99,
      quantity: 1,
      stockStatus: 'In Stock',
      addedDate: 'June 17, 2024',
      buttonType: 'addToCart',
      description: 'Durable hiking shoes with waterproof membrane and anti-slip soles',
      category: 'Footwear'
    },
    {
      id: 4,
      name: 'Blue man t-shirt',
      image: 'https://example.com/images/blue-tshirt.jpg',
      priceRange: { min: 12.99, max: 14.99 },
      quantity: 1,
      stockStatus: 'In Stock',
      addedDate: 'June 17, 2024',
      buttonType: 'selectOptions',
      description: 'Classic blue t-shirt available in multiple sizes and fits',
      category: 'Clothing'
    }
  ];

  const [likedItems, setLikedItems] = React.useState(wishlistItems.map(item => item.id));
  const [selectedImage, setSelectedImage] = React.useState(null);

  const toggleLike = (itemId) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>My Wishlist | Your Store Name</title>
        <meta name="description" content="Browse and manage your wishlist items. Save your favorite products for later purchase." />
        <meta name="keywords" content="wishlist, favorites, save products, shopping list" />
        <meta property="og:title" content="My Wishlist | Your Store Name" />
        <meta property="og:description" content="Browse and manage your wishlist items" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourstore.com/wishlist" />
        {wishlistItems.map(item => (
          <link key={item.id} rel="preload" href={item.image} as="image" />
        ))}
      </Head>

      <div className="wishlist-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(20px, 5vw, 24px)',
          marginBottom: '30px',
          fontWeight: 'normal',
          display: 'flex',
          alignItems: 'center'
        }}>
          <FaHeart style={{ color: '#e53935', marginRight: '10px' }} />
          My wishlist
        </h1>
        
        <div className="wishlist-table" style={{ 
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          overflowX: 'auto'
        }}>
          {/* Table Header - Hidden on mobile */}
          <div className="table-header" style={{ 
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 3fr) repeat(3, minmax(100px, 1fr)) minmax(120px, 1fr)',
            backgroundColor: '#f5f5f5',
            padding: '15px 20px',
            fontWeight: 'bold',
            borderBottom: '1px solid #e0e0e0',
            '@media (maxWidth: 768px)': {
              display: 'none'
            }
          }}>
            <div>Product name</div>
            <div>Unit price</div>
            <div>Quantity</div>
            <div>Stock status</div>
            <div>Arrange</div>
          </div>
          
          {/* Wishlist Items */}
          <div className="wishlist-items">
            {wishlistItems.filter(item => likedItems.includes(item.id)).map((item) => (
              <div key={item.id} className="wishlist-item" style={{ 
                display: 'grid',
                gridTemplateColumns: 'minmax(200px, 3fr) repeat(3, minmax(100px, 1fr)) minmax(120px, 1fr)',
                padding: '20px',
                borderBottom: '1px solid #e0e0e0',
                alignItems: 'center',
                position: 'relative',
                '@media (maxWidth: 768px)': {
                  gridTemplateColumns: '1fr',
                  gap: '15px',
                  padding: '15px'
                }
              }}>
                {/* Heart icon for mobile */}
                <button 
                  onClick={() => toggleLike(item.id)}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '18px',
                    color: likedItems.includes(item.id) ? '#e53935' : '#ccc',
                    zIndex: 1
                  }}
                >
                  {likedItems.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
                
                {/* Product Info */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  '@media (maxWidth: 768px)': {
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }
                }}>
                  <div 
                    onClick={() => openImageModal(item.image)}
                    style={{ 
                      marginRight: '15px', 
                      width: '80px', 
                      height: '80px', 
                      backgroundColor: '#f0f0f0',
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                      '@media (maxWidth: 768px)': {
                        width: '100%',
                        height: '150px',
                        marginRight: '0',
                        marginBottom: '10px'
                      }
                    }}
                  ></div>
                  <div>
                    <div style={{ 
                      fontWeight: 'bold', 
                      marginBottom: '5px',
                      fontSize: 'clamp(14px, 4vw, 16px)'
                    }}>{item.name}</div>
                    <div style={{ 
                      color: '#666', 
                      fontSize: '14px',
                      '@media (maxWidth: 768px)': {
                        marginBottom: '10px'
                      }
                    }}>Added on: {item.addedDate}</div>
                  </div>
                </div>
                
                {/* Price - Mobile label */}
                <div style={{ position: 'relative' }}>
                  <span style={{
                    display: 'none',
                    '@media (maxWidth: 768px)': {
                      display: 'inline',
                      position: 'absolute',
                      left: '0',
                      top: '-20px',
                      fontSize: '12px',
                      color: '#666'
                    }
                  }}>Price:</span>
                  {item.hasDiscount ? (
                    <>
                      <span style={{ 
                        textDecoration: 'line-through', 
                        color: '#999', 
                        marginRight: '5px',
                        fontSize: 'clamp(12px, 3vw, 14px)'
                      }}>${item.originalPrice.toFixed(2)}</span>
                      <span style={{ 
                        color: '#e53935', 
                        fontWeight: 'bold',
                        fontSize: 'clamp(14px, 3.5vw, 16px)'
                      }}>${item.discountedPrice.toFixed(2)}</span>
                    </>
                  ) : item.priceRange ? (
                    <span style={{ fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
                      ${item.priceRange.min.toFixed(2)} - ${item.priceRange.max.toFixed(2)}
                    </span>
                  ) : (
                    <span style={{ fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
                      ${item.price.toFixed(2)}
                    </span>
                  )}
                </div>
                
                {/* Quantity - Mobile label */}
                <div style={{ position: 'relative' }}>
                  <span style={{
                    display: 'none',
                    '@media (maxWidth: 768px)': {
                      display: 'inline',
                      position: 'absolute',
                      left: '0',
                      top: '-20px',
                      fontSize: '12px',
                      color: '#666'
                    }
                  }}>Qty:</span>
                  {item.quantity}
                </div>
                
                {/* Stock Status - Mobile label */}
                <div style={{ 
                  color: item.stockStatus === 'In Stock' ? '#4caf50' : '#e53935',
                  position: 'relative'
                }}>
                  <span style={{
                    display: 'none',
                    '@media (maxWidth: 768px)': {
                      display: 'inline',
                      position: 'absolute',
                      left: '0',
                      top: '-20px',
                      fontSize: '12px',
                      color: '#666'
                    }
                  }}>Stock:</span>
                  {item.stockStatus}
                </div>
                
                {/* Action Button */}
                <div style={{ 
                  '@media (maxWidth: 768px)': {
                    width: '100%'
                  }
                }}>
                  {item.buttonType === 'addToCart' ? (
                    <button style={{ 
                      backgroundColor: '#1976d2', 
                      color: 'white', 
                      border: 'none', 
                      padding: '8px 15px', 
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}>
                      <FaShoppingCart /> Add to cart
                    </button>
                  ) : (
                    <button style={{ 
                      backgroundColor: 'transparent', 
                      color: '#1976d2', 
                      border: '1px solid #1976d2', 
                      padding: '8px 15px', 
                      borderRadius: '4px',
                      cursor: 'pointer',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}>
                      <FaCog /> Select options
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bulk Actions */}
          <div className="bulk-actions" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '15px 20px',
            backgroundColor: '#f5f5f5',
            borderTop: '1px solid #e0e0e0',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <span style={{ 
                marginRight: '10px',
                '@media (maxWidth: 480px)': {
                  width: '100%'
                }
              }}>Apply to selected:</span>
              <select style={{ 
                padding: '8px', 
                marginRight: '10px', 
                border: '1px solid #ddd',
                borderRadius: '4px',
                minWidth: '150px'
              }}>
                <option>Add to cart</option>
                <option>Remove from wishlist</option>
              </select>
              <button style={{ 
                backgroundColor: '#1976d2', 
                color: 'white', 
                border: 'none', 
                padding: '8px 15px', 
                borderRadius: '4px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}>APPLY</button>
            </div>
            <button style={{ 
              backgroundColor: 'transparent', 
              color: '#1976d2', 
              border: 'none', 
              padding: '8px 0', 
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}>UPDATE</button>
          </div>
        </div>
        
        {/* Share Section */}
        <div className="share-section" style={{ 
          marginTop: '20px', 
          display: 'flex', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <span style={{ marginRight: '10px' }}>Share on:</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: '#3b5998',
              fontSize: '20px'
            }}>
              <FaFacebook />
            </button>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: '#1da1f2',
              fontSize: '20px'
            }}>
              <FaTwitter />
            </button>
            <button style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: '#e60023',
              fontSize: '20px'
            }}>
              <FaPinterest />
            </button>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="action-buttons" style={{ 
          marginTop: '30px', 
          display: 'flex', 
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <button style={{ 
            backgroundColor: 'transparent', 
            color: '#1976d2', 
            border: '1px solid #1976d2', 
            padding: '12px 20px', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            flex: '1',
            minWidth: '200px'
          }}>ASK FOR AN ESTIMATE</button>
          <button style={{ 
            backgroundColor: '#1976d2', 
            color: 'white', 
            border: 'none', 
            padding: '12px 20px', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            flex: '1',
            minWidth: '200px'
          }}>ADD ALL TO CART</button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={closeImageModal}>
          <div style={{
            maxWidth: '90%',
            maxHeight: '90%',
            position: 'relative'
          }}>
            <img 
              src={selectedImage} 
              alt="Product preview" 
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain'
              }}
            />
            <button 
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;