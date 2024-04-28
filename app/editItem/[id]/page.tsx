import EditItemForm from "@/Components/EditItem";

const getItemById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch item");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditItem({ params }) {
  const { id } = params;
  const { item } = await getItemById(id);
  const { title, description, question, itemType } = item;

  return <EditItemForm id={id} title={title} description={description} question={question} itemType={itemType}  />;
}