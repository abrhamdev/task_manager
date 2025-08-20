/* eslint-disable react/prop-types */
const ToastContainer = ({toasts}) => {
  return (
    <div style={styles.container}>
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>
  );
};

const Toast = ({message, type}) => {
  const backgroundColors = {
    info: '#2196f3',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
  };

  return (
    <div style={{ ...styles.toast, backgroundColor: backgroundColors[type] || '#2196f3' }}>
      {message}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top:20,
    right:20,
    zIndex: 1000,
  },
  toast: {
    marginBottom: 10,
    padding: '10px 20px',
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
};

export default ToastContainer;
