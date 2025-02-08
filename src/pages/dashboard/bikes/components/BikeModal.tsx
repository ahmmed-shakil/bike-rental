/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Modal, Form, Input, InputNumber, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Bike {
  id: number;
  model: string;
  brand: string;
  price: number;
  images: string[];
}

interface BikeModalProps {
  visible: boolean;
  onCancel: () => void;
  onSave: (bike: Bike) => void;
  editingBike: Bike | null;
}

const BikeModal: React.FC<BikeModalProps> = ({
  visible,
  onCancel,
  onSave,
  editingBike,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingBike) {
      form.setFieldsValue(editingBike);
    } else {
      form.resetFields();
    }
  }, [editingBike, form]);

  const onFinish = (values: any) => {
    onSave(values);
    form.resetFields();
  };

  return (
    <Modal
      title={editingBike ? "Edit Bike" : "Add New Bike"}
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="model" label="Model" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, type: "number", min: 0 }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="images" label="Images">
          <Upload listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {editingBike ? "Update" : "Add"} Bike
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BikeModal;
