UPDATE inventory 
SET (name, price, img) = ($2, $3, $4)
WHERE product_id = $1;

SELECT * FROM inventory;