import Form from 'react-bootstrap/Form';

export default function InputField(
  { name, label, type, onChange,placeholder, error, fieldRef , status}
) {
  return (
    <Form.Group controlId={name} className="InputField">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        as={type || 'textarea'}
        placeholder={placeholder}
        ref={fieldRef}
        className='text align-content-center'
        onChange={onChange}
      />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
}