import React, { useState } from 'react';
import { QrScanner } from '@yudiel/react-qr-scanner';
import { useNavigate } from 'react-router-dom';
import './QRScanner.css';

const QRScanner = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleScan = (result) => {
    if (result) {
      try {
        const tableData = JSON.parse(result);
        // Masa bilgisini doğrula
        if (tableData.tableId && tableData.tableNumber) {
          navigate(`/table/${tableData.tableId}`, { 
            state: { tableData } 
          });
        } else {
          setError('Geçersiz QR kod');
        }
      } catch (err) {
        setError('QR kod okunamadı');
      }
    }
  };

  const handleError = (err) => {
    setError('Kamera erişimi hatası');
  };

  return (
    <div className="qr-scanner-page">
      <div className="scanner-container">
        <h1>QR Kodu Okutun</h1>
        <p>Masanızdaki QR kodu kameraya tutun</p>
        
        <div className="scanner-wrapper">
          <QrScanner
            onDecode={handleScan}
            onError={handleError}
            constraints={{ facingMode: 'environment' }}
          />
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <button 
          className="manual-table-btn"
          onClick={() => navigate('/manual-table')}
        >
          Manuel Masa Seçimi
        </button>
      </div>
    </div>
  );
};

export default QRScanner;