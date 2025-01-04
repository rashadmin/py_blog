import Form from 'react-bootstrap/Form';

export default function InputField(
  { name, label, type, onChange,placeholder, value, fieldRef}
) {
  return (
    <Form.Group controlId={name} className="InputField">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        as={type || 'textarea'}
        placeholder={placeholder}
        ref={fieldRef}
        className='text align-content-center input'
        onChange={onChange}
        value={value}
      />
      {/* <Form.Text className="text-danger">{error}</Form.Text> */}
    </Form.Group>
  );
}