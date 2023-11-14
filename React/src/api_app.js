import React, {useState, useEffect} from 'react'
import api from './api'

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income
  });

  const fetchProducts = async () => {
    const response = await api.get('/products/')
    setTransactions(response.data)
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  }
}

