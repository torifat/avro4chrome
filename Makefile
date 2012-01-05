ZIP_NAME = `cd ..; pwd`/avro4chrome.zip

main: clean
	@@echo "Creating the new ZIP..."
	@@zip ${ZIP_NAME} -qr9 . -x Makefile
	@@echo "The new ZIP file has been created"
	@@echo ${ZIP_NAME}
clean:
	@@echo "Removing the old ZIP..."
	@@rm -f ${ZIP_NAME}
	@@echo "The old ZIP file has been removed"
